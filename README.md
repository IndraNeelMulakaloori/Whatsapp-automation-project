# Whatsapp Automation Testing

The above program helps to automate whatsapp conversation.

## Libraries Used
- [whatsappwebjs](https://www.npmjs.com/package/whatsapp-web)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)

### Getting Started
- Install [whatsappwebjs](https://www.npmjs.com/package/whatsapp-web) and [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) via npm
- Use the sample code below to generate a qr code

```
const client = new Client

client.on('qr', (qr) => {
    qrcode.generate(qr,{small:true});
    console.log('Scan the Above Qr Code');
});

client.on('ready', () => {
    console.log('Client is ready!');
});
```
- Run the above program in the terminal 
- That would result in generation of a qr code in your terminal
- Scan the Qr code and your client is ready
![qrcode-img](/images/qrcode.png)

### More Info
- Check out this documentation [whatsappweblibrary](https://wwebjs.dev/guide/) 