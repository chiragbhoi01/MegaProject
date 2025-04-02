import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf.js'
export class Authservice {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount ({email , password , name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email,password,name)
            if(userAccount){
              return  this.loginAccount
            }else userAccount
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async loginAccount ({email , password }) {
        try {
            return await this.account.createEmailPasswordSession(ID.unique(),email,password)
        } catch (error) {
            console.log(error);
            
        }
    }
    async logoutAccount({ID}) {
        try {
          return  await this.account.deleteIdentity(ID)
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getCurrentAccount () {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
            return false
        }
    }
}

const authservice = new Authservice()
export default authservice