import { createAsyncThunk } from "@reduxjs/toolkit";
import Prismic from "prismic-javascript";

const apiEndpoint = 'https://webdevdude.prismic.io/api/v2';
const accessToken = 'MC5XNUdLbVNZQUFMREppVlVO.Wj0777-977-9V3UTVGXvv73vv71lO--_ve-_vTgq77-977-977-977-9Ze-_ve-_vWtb77-977-977-9Ku-_vQ';

export const fetchProjects = createAsyncThunk("projects/fetchAll", async () => {
  const api = await Prismic.api(apiEndpoint, { accessToken });
  const response = await api.query(
    Prismic.Predicates.at("document.type", "projects"),
    { orderings: "[my.projects.dip_id desc]" }
  );
  return response;
});

export const fetchProject = createAsyncThunk(
  "projects/fetchSingle",
  async (slug: string) => {
    const api = await Prismic.api(apiEndpoint, { accessToken });
    const response = await api.query(
      Prismic.Predicates.at("document.tags", [slug])
    );
    return response.results[0];
  }
);
