# 🎉 UNXD Event React App

Hello there! 👋

I am excited to share with you the completion of the UNXD Event React App assignment.
The app is built to connect users' Metamask wallets, enabling them to participate in UNXD events.
Users are also able to access an exclusive event form if they hold specific NFTs in their wallets.

![UNXD Event React App Screenshot](./public/logo_dark.png)

### 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Responsive Design](#-responsive-design)
- [Prerequisites](#prerequisites)
- [Getting Started](#-getting-started)
- [Testing and Linting](#-testing-and-linting)
- [Husky Pre-commit](#-husky-pre-commit)
- [Deployment](#-deployment)
- [How to Use](#️-how-to-use)
- [Contact](#-contact)
- [Contributing](#-contributing)
- [License](#-license)
- [Show Your Support](#show-your-support)
- [Acknowledgments](#acknowledgments)

### 🎯 Features

- Wallet Connect functionality compatible with all devices 📱💻
- Prompt for users without Metamask to install the extension/app 👛
- Token-gated event form accessible for users with specific NFTs 🎟
- User-friendly and intuitive app design 📝

### 🛠️ Tech Stack

- React: React ⚛️
- ethers.js: ethers.js 🔗
- Solidity: Solidity 📜
- ESLint: ESLint 🚨
- Prettier: Prettier 🎨
- Jest: Jest 🃏
- Netlify: Netlify ☁️

### 📱 Responsive Design

I've designed the UNXD Event React App to be fully responsive 😄👍🏼📱💻
No matter what device you're on, whether it's a mobile phone, tablet, or desktop, this app adjusts beautifully to the screen size, ensuring a seamless user experience.

### Prerequisites

- Node.js v16.14.0 or later
- Metamask Wallet
- One of the following NFTs:
  - DGFamily Box:
    - Testnet: <b>0x96000D4457b9A380CAa979C243e1d65fcaC41D53</b>
    - Mainnet: <b>0xEb6C5acCafD8515c1b9E4c794bDC41532C5543EC</b>
  - Glass Box:
    - Mainnet: <b>0xf53A0E3078c698b596D9bdCbADEd2ABcCd88De23</b>
    - Mainnet: <b>0x68F4Ba8018216542Ac2Ab8125166Be66304DD71c</b>

## 🚀 Getting Started

To run the app locally, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/unxd-assignment.git
```

2. Install dependencies:

```bash
cd unxd-assignment
npm install
```

3. Start the development server:

```bash
npm start
```

The app should now be running at http://localhost:3000/.

### 🧪 Testing and Linting

To run tests and linting:

```bash
npm run test
npm run lint
```

### 💼 Husky Pre-commit

This project uses Husky to ensure that all commits pass the linter. If your commit fails the lint check, you will need to fix the lint errors before you can commit.

### 🌐 Deployment

The application has been deployed on Netlify with two separate environments:

- Testnet: You can test it out at https://unxd-dev.netlify.app/
  This environment is meant for testing the app with test NFTs on the Goerli testnet.

- Mainnet: You can access it at https://unxd.netlify.app/
  This environment is the "live" version of the app where real NFT assets on the Ethereum mainnet can be used.

For the purpose of testing, I have deployed two smart contracts for DGFamily and GlassBox on the Goerli testnet. The addresses are:

- DGFamily: https://goerli.etherscan.io/address/0x96000D4457b9A380CAa979C243e1d65fcaC41D53
- GlassBox: https://goerli.etherscan.io/address/0xf53A0E3078c698b596D9bdCbADEd2ABcCd88De23

You can mint some NFTs from these contracts and test the application on the testnet.

### 🕹️ How to Use

Here are the steps to use the UNXD Event React App:

1. Open the app URL (either the <a href='https://unxd-dev.netlify.app/' target='_blank'>development</a> or <a href='https://unxd.netlify.app/' target='_blank'>production</a> version, depending on your purpose).
2. You'll be prompted to connect your Metamask wallet. Click on the "Connect Wallet" button.
3. If you don't have Metamask installed, you'll see a message prompting you to install it.

- For mobile devices, you will be redirected to install Metamask application

4. Once connected, if you have the required NFTs (DGFamily Box or Glass Box), you'll be able to access the event form.
5. If you attempt to access the form without the required NFT, you'll see a prompt message.
6. The event form displays information about the amount and type of the box you own.
7. You can fill out the form as required, and the entered information will be saved in a text file.

### 👥 Contact

Nawar Hisso

- [Email](mailto:nawwarhisso@gmail.com) 📧
- <a href='https://www.linkedin.com/in/nawarhisso/' target='_blank'>Linkedin</a> 🌐
- <a href='https://www.facebook.com/nawwar.hisso/' target='_blank'>Facebook</a> 👤
- <a href='https://www.instagram.com/iam.nawar/' target='_blank'>Instagram</a> 📷
- <a href='https://twitter.com/HissoNawar' target='_blank'>Twitter</a> 🐦

### 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/YOUR_USERNAME/unxd-event-react-app/issues). To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

### 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for more details.

### Show your support

Give a ⭐️ if you like this solution!

### Acknowledgments

Happy Eventing! 🥳
