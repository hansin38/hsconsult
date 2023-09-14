const SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

function doGet(e){
  return handleResponse(e, 'get');
}


function doPost(e){
  return handleResponse(e, 'post');
}

function handleResponse(ee, method) {
  const e = ee || {parameter: { sheet: 'inquiry', method: "update", limit: 10, page: 1, id: 2, wdata: "W1s2LCJPIl1d"}}

  const lock = LockService.getPublicLock();
  lock.waitLock(30000);  // wait 30 seconds before conceding defeat.

  try {
    const doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));

    const sheet = doc.getSheetByName(e.parameter.sheet);
    const metasheet = doc.getSheetByName('meta');

    const header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow()+1; // get next row
    const metaValues = metasheet.getRange(1, 1, 1, metasheet.getLastColumn()).getValues()[0];

    if (e.parameter.method === 'page') {
      let startRow = (parseInt(e.parameter.page) - 1) * parseInt(e.parameter.limit) + 2;
      const list = sheet.getRange(startRow, 1, parseInt(e.parameter.limit), sheet.getLastColumn()).getValues().filter(e=> e[0] && e[0] !== '');
      return ContentService.createTextOutput(JSON.stringify({"result":"success", "data": list, "count": metaValues[e.parameter.sheet === 'inquiry' ? 0 : 1]})).setMimeType(ContentService.MimeType.JSON);
    } else if (e.parameter.method === 'read') {
      const article = sheet.getRange(parseInt(e.parameter.id) + 1, 1, 1, sheet.getLastColumn()).getValues()[0];
      return ContentService.createTextOutput(JSON.stringify({"result":"success", "data": article})).setMimeType(ContentService.MimeType.JSON);
    } else if (e.parameter.method === 'delete') {
      sheet.deleteRow(parseInt(e.parameter.id));
      return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
    } else if (e.parameter.method === 'update') {
      if (e.parameter.wdata) {
        const row = JSON.parse(Utilities.newBlob(Utilities.base64Decode(e.parameter.wdata, Utilities.Charset.UTF_8)).getDataAsString());
        const article = sheet.getRange(parseInt(e.parameter.id), 1, 1, sheet.getLastColumn()).getValues()[0];
        row.forEach(e => {
          let key = parseInt(e[0]);
          let value = e[1];
          article[key] = value;
        });
        sheet.getRange(parseInt(e.parameter.id), 1, 1, article.length).setValues([article]);
        return ContentService.createTextOutput(JSON.stringify({ "result": "success", "data": article })).setMimeType(ContentService.MimeType.JSON);
      } else {
        throw new Error('invalid update data');
      }
    } else if (e.parameter.method === 'write') {
      if (e.parameter.wdata) {
        const row = JSON.parse(Utilities.newBlob(Utilities.base64Decode(e.parameter.wdata, Utilities.Charset.UTF_8)).getDataAsString());
        row.unshift(new Date());
        sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
        return ContentService.createTextOutput(JSON.stringify({"result":"success", "data": nextRow})).setMimeType(ContentService.MimeType.JSON);
      } else {
        throw new Error('invalid write data');
      }
    }
  } catch(error){
    return ContentService
      .createTextOutput(JSON.stringify({"result":"error", "error": error, parameter: e.parameter}))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
