import { lazy } from 'react';

// Lazy load components for better performance
export const LazyAbout = lazy(() => import('./About'));
export const LazySkills = lazy(() => import('./Skills'));
export const LazyProjects = lazy(() => import('./Projects'));
export const LazyExperience = lazy(() => import('./Experience'));
export const LazyTestimonials = lazy(() => import('./Testimonials'));
export const LazyBlog = lazy(() => import('./Blog'));
export const LazyContact = lazy(() => import('./Contact'));