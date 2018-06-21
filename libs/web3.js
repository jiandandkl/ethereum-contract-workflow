import Web3 from 'web3';
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

let web3;

// 浏览器环境且已安装Metamask
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  // web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/CqCd0QgCozHBEk19ub2M'))
  web3 = new Web3(new Web3.providers.HttpProvider(publicRuntimeConfig.infuraUrl))
}

export default web3;