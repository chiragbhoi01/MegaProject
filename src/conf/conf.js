const conf = {
    appWriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWirteDataBaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteBucketid : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appWriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}
export default conf
