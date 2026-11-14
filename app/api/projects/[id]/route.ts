// get project by id api
// Get app/api/projects/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    // async function to get parameter id from request and return the project with that id
    const { id } = await params;
    const projectId = parseInt(id, 10);
    // Validate the id
    if (isNaN(projectId)) {
        return NextResponse.json({ error: 'Invalid project ID' }, { status: 400 });
    }
  const project = getProjectById(projectId);
  if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 }) ;
  }
  return NextResponse.json(project);
}
