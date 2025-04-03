import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ tittle, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug,
        { tittle, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async updatePost({ tittle, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appWirteDataBaseId,
        conf.appWriteCollectionId,
        slug,
        { tittle, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWirteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWirteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteCollectionId,
        conf.appWirteDataBaseId,
        queries
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  //file upload & download
  async fileUpload(file) {
    try {
      return await this.bucket.createFile(
        ID.unique(),
        file,
        conf.appWriteBucketid
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appWriteBucketid, fileId());
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async filePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appWriteBucketid, fileId);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

const service = new Service();
export default service;
