// var HDWalletProvider = require("truffle-hdwallet-provider");
// module.exports = 
// {
//     networks: 
//     {
// 	    development: 
// 		{
// 	   		host: "localhost",
// 	   		port: 7545,
// 	   		network_id: "*" // Match any network id
// 		},
//     	rinkeby: {
//     	    provider: function() {
// 		      var mnemonic = "tired math weapon loud income ecology cube liquid useful depth monkey bounce";//put ETH wallet 12 mnemonic code	
// 			  return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/55fb8b6544a9494189fac88aa21560a7");
// 			// return new HDWalletProvider(mnemonic,"http://localhost:8545");
// 		    },
// 		    network_id: '4',
// 		    from: '0xa8dbAfD2942497449Dfa14FeC7D14d280ba34F7E',/*ETH wallet 12 mnemonic code wallet address*/
// 		}  
//     }
// };


var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = 
{
    networks: 
    {
	    development: 
		{
	   		host: "localhost",
	   		port: 7545,
			network_id: "*",
		},
    	// rinkeby: {
    	//     provider: function() {
		//       var mnemonic = "tired math weapon loud income ecology cube liquid useful depth monkey bounce";//put ETH wallet 12 mnemonic code	
		// 	  return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/55fb8b6544a9494189fac88aa21560a7");
		// 	// return new HDWalletProvider(mnemonic,"http://localhost:8545");
		//     },
		//     network_id: '4',
		//     from: '0xa8dbAfD2942497449Dfa14FeC7D14d280ba34F7E',/*ETH wallet 12 mnemonic code wallet address*/
		// }  
	},
	solc: {
		optimizer: {
		  enabled: true,
		  runs: 200
		}
	}
};