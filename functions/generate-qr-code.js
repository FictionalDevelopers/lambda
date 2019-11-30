const QRCode = require('qrcode');

module.exports.handle = async event => {
  const data = JSON.parse(event.body) || {};
  const {
    name,
    password,
    protocol
  } = data;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: true,
        url: await QRCode.toDataURL(`WIFI:T:${protocol};S:${name};P:${password};;`),
        data,
      },
      null,
      2,
    ),
  };
};
