
import conf from "../conf/conf";
import { Client, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client;
    databases;
    bucket;

    constructor() {

        this.client
            .setEndpoint(conf.appWriteURL) // Your API Endpoint
            .setProject(conf.appWriteProjectId); // Your project ID    

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug);
        } catch (error) {
            return false;
        }
    }

    async getPosts() {
        try {

            return await this.databases.listDocuments(conf.appWriteDatabaseId, conf.appWriteCollectionId,
                [
                    Query.equal('status', ['active'])
                ]
            );
        } catch (error) {
            return false;
        }
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            );
        } catch (error) {
            return false;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            );

        } catch (error) {
            return false;
        }
    }

    async deletePost(slug) {
        try {

            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            );

            return true;

        } catch (error) {
            return false;
        }
    }
}

const blogService = new Service();

export default blogService;