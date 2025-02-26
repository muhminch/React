import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

export class Storage{
    client= new Client();
    bucket;

    Storage(){
        this.client
            .setEndpoint(conf.appWriteURL) // Your API Endpoint
            .setProject(conf.appWriteProjectId); // Your project ID    

        this.bucket = new Storage(this.client);
    }

    async uploadFile(file){
        try {
            
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique,
                file
            )

        } catch (error) {
            return false;
        }
    }

    async deleteFile(fileId){
        try {
           return await this.bucket.deleteFile(
            conf.appWriteBucketId,
            fileId
           );
        } catch (error) {
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            return await await this.bucket.getFilePreview(
                conf.appWriteBucketId,
                fileId
            ).href;
            
        } catch (error) {
            return false;
        }
    }


}

const storageService = new Storage();
export default storageService;