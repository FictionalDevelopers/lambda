const QRCode = require('qrcode');

module.exports.handle = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: await QRCode.toDataURL('www.google.com'),
      },
      null,
      2,
    ),
  };
};
