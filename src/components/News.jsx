import React from 'react';

export default function News() {
  return (
    <article className="flex flex-nowrap overflow-hidden py-3 group"> 
<div className="inline-flex flex-nowrap gap-20 border-b-[1px] border-primary-text  [mask-image:_linear-gradient(to_left,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
<div className="flex whitespace-nowrap gap-6 animate-startRight group-hover:animate-pause mx-10">
          <p className="ml-20"> {/* Menambahkan margin kiri pada elemen pertama */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex whitespace-nowrap gap-6 animate-startRight group-hover:animate-pause">
          <p className="ml-20"> {/* Sama untuk elemen kedua */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </article>
  );
}
