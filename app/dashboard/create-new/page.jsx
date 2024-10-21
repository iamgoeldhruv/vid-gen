import React, { useState } from 'react';
import SelectTopic from './_components/selectTopic'
const CreateNew = () => {
  const [formData,setFormData]=useState([]);
  const handleInputChange=(fieldName,fieldValue)=>{


  }
  return (
    <div className="p-6">
      <h2 className="text-black text-2xl font-semibold">
        Create New
      </h2>
      <div>
        <SelectTopic onUserSelect={handleInputChange}></SelectTopic>

      </div>
    </div>
  );
}

export default CreateNew;
