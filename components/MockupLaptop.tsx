'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MockupLaptopProps {
  projectUrl: string;
  projectName: string;
  screenshot?: string;
  image?: string;
}

export default function MockupLaptop({ projectUrl, projectName, screenshot, image }: MockupLaptopProps) {
  const [imageError, setImageError] = useState(false);
  const imageSrc = image || screenshot;
  
  return (
    <div className="relative w-full aspect-[16/10] flex items-center justify-center group/laptop">
      {/* Laptop Base */}
      <div className="relative w-[95%] h-full transition-all duration-500 ease-out group-hover/laptop:scale-[1.03] group-hover/laptop:brightness-110">
        {/* Screen Container */}
        <div className="relative w-full h-[92%] bg-gradient-to-b from-[#2c2c2c] to-[#1a1a1a] rounded-t-2xl border-[8px] border-[#2c2c2c] shadow-2xl group-hover/laptop:shadow-accent/20 transition-shadow duration-500">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />
          
          {/* Screen Bezel */}
          <div className="absolute inset-2 bg-black rounded-lg overflow-hidden shadow-inner">
            {/* Browser Bar */}
            <div className="w-full h-8 bg-[#2c2c2c] flex items-center px-3 gap-2 border-b border-[#1a1a1a]">
              {/* Traffic Lights */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm" />
              </div>
              
              {/* URL Bar */}
              <div className="flex-1 h-5 bg-[#1a1a1a] rounded flex items-center px-3 ml-2 border border-[#3a3a3a]">
                <svg className="w-3 h-3 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[10px] text-gray-500 truncate">{projectUrl}</span>
              </div>
            </div>
            
            {/* Screen Content - Preview */}
            <div className="w-full h-[calc(100%-2rem)] bg-gradient-to-br from-dark-secondary via-dark-primary to-dark-tertiary relative overflow-hidden">
              {imageSrc && !imageError ? (
                <div className="relative w-full h-full overflow-hidden">
                  {/* Project Image */}
                  {image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`Preview de ${projectName}`}
                        fill
                        className="object-cover object-top transition-all duration-700 ease-out group-hover/laptop:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
                        onError={() => setImageError(true)}
                        priority={false}
                      />
                    </div>
                  ) : screenshot ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={screenshot}
                        alt={`Preview de ${projectName}`}
                        fill
                        className="object-cover object-top transition-all duration-700 ease-out group-hover/laptop:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={75}
                        onError={() => setImageError(true)}
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Hover brightness overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover/laptop:bg-white/5 transition-all duration-500 pointer-events-none" />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3 opacity-50 group-hover/laptop:opacity-70 transition-opacity duration-300">
                    <div className="text-5xl">🖥️</div>
                    <p className="text-text-secondary text-sm font-medium">{projectName}</p>
                    <p className="text-text-secondary/50 text-xs">Clique para ver preview</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Screen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-t-2xl" />
        </div>
        
        {/* Laptop Base */}
        <div className="absolute bottom-0 w-full h-[10%]">
          <div className="w-full h-full bg-gradient-to-b from-[#d6d6d6] to-[#b8b8b8] rounded-b-2xl relative overflow-hidden shadow-lg">
            {/* Keyboard Indent */}
            <div className="absolute inset-x-[8%] top-1 bottom-1 bg-gradient-to-b from-[#c0c0c0] to-[#a8a8a8] rounded-sm shadow-inner" />
            
            {/* Trackpad */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-3 bg-gradient-to-b from-[#a8a8a8] to-[#9a9a9a] rounded-sm shadow-inner" />
          </div>
        </div>
        
        {/* Enhanced Shadow with hover effect */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/30 blur-xl rounded-full transition-all duration-500 group-hover/laptop:bg-black/40 group-hover/laptop:blur-2xl group-hover/laptop:w-[95%]" />
      </div>
    </div>
  );
}
