import Unsplash, { toJson } from 'unsplash-js/native';

const unsplash = new Unsplash({
  applicationId: "ca81ff335b1989f3e3cae0821ae2af592e0b6f604e40aa1bede3302eba048ac0",
  secret: "bb42726f011f0cfaf7f1170cc3d8f2fd3c33db1f566d5db47d4e77560ac35c2e",
  callbackUrl: "unsplashed://home/home"
});

const PAGE_SIZE = 20;

export async function getPictures(page: number = 1): Array<Object> {
  const result = await unsplash.photos
    .listPhotos(page, PAGE_SIZE, "latest")
    .then(toJson);
  return result;
}