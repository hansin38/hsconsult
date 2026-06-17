import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContactDirections from '@/components/ContactDirections/ContactDirections';

const ContactDirectionsPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContactDirections />
    </Layout>
  );
};

export default ContactDirectionsPage;
