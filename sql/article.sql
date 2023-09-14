CREATE TABLE inquiry (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    reply BOOLEAN,
    password TEXT,
);
CREATE TABLE notice (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL
);

-- timestamp == new Date().toISOString();
INSERT INTO inquiry (timestamp, title, content, name, email, phone, reply, password)
VALUES ('2023-09-14T15:28:34.855Z', '새로운 글 제목', '새로운 글 내용', '작성자 이름', '작성자 이메일', '작성자 전화번호', true, 'password');

INSERT INTO notice (timestamp, title, content)
VALUES ('2023-09-14T15:28:34.855Z', '새로운 글 제목', '새로운 글 내용');

UPDATE inquiry
SET reply = false
WHERE id = 3;

DELETE FROM notice
WHERE id = 3;
