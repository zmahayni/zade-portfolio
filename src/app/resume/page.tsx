export default function ResumePage() {
  return (
    <div className="container mx-auto px-6 pt-32 lg:pt-24 pb-24">
      <h1 className="text-4xl md:text-5xl font-semibold text-slate-lightest mb-8">
        Resume
      </h1>
      
      <div className="bg-navy-dark bg-opacity-50 rounded-lg overflow-hidden border border-navy-light border-opacity-30 p-4">
        <iframe 
          src="/resume.pdf" 
          className="w-full h-[calc(100vh-250px)] min-h-[800px]" 
          title="Zade Mahayni's Resume"
        />
      </div>
      
      <div className="mt-8 flex justify-center">
        <a 
          href="/resume.pdf" 
          download="Zade_Mahayni_Resume.pdf"
          className="btn-primary inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
}
