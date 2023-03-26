import React from 'react';
// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import myResume from './imgs/greyPearsonResume.pdf'

const styles = {
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
}

export default function Resume() {

  const download = () => {
    window.open(myResume, '_blank');
  }

  return (
    <div style={styles.center}>
      <h1>Resume Page</h1>
      <h5>check out or download my resume here</h5>
      <button className='btn btn-primary' onClick={download}>
        Download PDF
      </button>
    </div>
  );
}
