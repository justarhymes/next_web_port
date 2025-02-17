import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects, fetchProject } from "@/actions";
import { Document } from "prismic-javascript/types/documents";

type ProjectsState = {
  projects: Document[];
  project: Document | null;
};

const initialState: ProjectsState = {
  projects: [],
  project: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload.results;
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.project = action.payload;
      });
  },
});

export default projectsSlice.reducer;
