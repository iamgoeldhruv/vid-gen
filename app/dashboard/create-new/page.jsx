import React from 'react';
import SelectTopic from './_components/selectTopic'
const CreateNew = () => {
  return (
    <div className="p-6">
      <h2 className="text-black text-2xl font-semibold">
        Create New
      </h2>
      <div>
        <SelectTopic></SelectTopic>

      </div>
    </div>
  );
}

export default CreateNew;
