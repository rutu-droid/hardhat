async function main(){
    const [deployer] = await ethers.getSigners(  );

    const Token =await ethers.getContractFactory("Token");
    const token =await Token.deploy( );
    console.log("Token address :",token.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=> {
    console .error(error);
    process.exit(1);
});
//Token address : 0x5FbDB2315678afecb367f032d93F642f64180aa3
//biology raven relief useful silly much lemon midnight goat boring anger project