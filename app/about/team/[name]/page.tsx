// Name of Team Member Page 

import React from 'react'

const DynamicPages = async (
    { params }: { params: Promise<{ name: string }> }
) => {

const name = (await params).name;

  return (
    <div>
      DynamicPages {name}
    </div>
  );
};

export default DynamicPages;
