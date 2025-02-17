"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '@/actions';
import Header from '@/components/sections/Header';
import ProjectsList from '@/components/projects/ProjectsList';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  const dispatch = useDispatch();
  const projects = useSelector((state: any) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (!projects) return null;

  return (
    <div>
      <Header />
      <ProjectsList projectList={projects} />
      <Footer />
    </div>
  );
}
