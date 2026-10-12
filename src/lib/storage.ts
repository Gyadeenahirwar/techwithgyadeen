export interface StorageFile {
  key: string;
  url: string;
  size: number;
  contentType: string;
  uploadedAt: Date;
}

export interface IStorageService {
  uploadFile(fileBuffer: Buffer, fileName: string, contentType: string): Promise<StorageFile>;
  getDownloadUrl(fileKey: string, expiresInSeconds?: number): Promise<string>;
  deleteFile(fileKey: string): Promise<boolean>;
}

export class LocalStorageService implements IStorageService {
  async uploadFile(fileBuffer: Buffer, fileName: string, contentType: string): Promise<StorageFile> {
    const key = `uploads/${Date.now()}-${fileName}`;
    return {
      key,
      url: `/api/storage/${key}`,
      size: fileBuffer.length,
      contentType,
      uploadedAt: new Date(),
    };
  }

  async getDownloadUrl(fileKey: string): Promise<string> {
    return `/api/storage/${fileKey}`;
  }

  async deleteFile(): Promise<boolean> {
    return true;
  }
}

export class GCSStorageService implements IStorageService {
  async uploadFile(fileBuffer: Buffer, fileName: string, contentType: string): Promise<StorageFile> {
    // Adapter ready for @google-cloud/storage
    const key = `gcs/${Date.now()}-${fileName}`;
    return {
      key,
      url: `https://storage.googleapis.com/${process.env.STORAGE_BUCKET || "techwithgyadeen-assets"}/${key}`,
      size: fileBuffer.length,
      contentType,
      uploadedAt: new Date(),
    };
  }

  async getDownloadUrl(fileKey: string): Promise<string> {
    return `https://storage.googleapis.com/${process.env.STORAGE_BUCKET || "techwithgyadeen-assets"}/${fileKey}`;
  }

  async deleteFile(): Promise<boolean> {
    return true;
  }
}

export function getStorageService(): IStorageService {
  const provider = process.env.STORAGE_PROVIDER || "LOCAL";
  if (provider === "GCS") {
    return new GCSStorageService();
  }
  return new LocalStorageService();
}
