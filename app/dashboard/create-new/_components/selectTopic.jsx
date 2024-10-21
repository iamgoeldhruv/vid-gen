'use client';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';  // Make sure this path and imports are correct

import { Textarea } from '../../../components/ui/textarea';  // Ensure this is correct as well

const SelectTopic = ({onUserSelect}) => {
  const storyOptions = [
    { id: 1, title: 'Adventure' },
    { id: 2, title: 'Mystery' },
    { id: 3, title: 'Romance' },
    { id: 4, title: 'Science Fiction' },
    { id: 5, title: 'Fantasy' },
    { id: 6, title: 'Horror' },
    { id: 7, title: 'Historical Fiction' },
    { id: 8, title: 'Comedy' },
    { id: 9, title: 'Custom Prompt' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-center mb-4">Content</h1>
      <p className="text-lg text-center mb-6">What is the topic of your video?</p>

      {/* Select Dropdown */}
      <div className="flex justify-center mb-6">
        <Select onValueChange={(value) => {setSelectedOption(value) ;value!='Custom Prompt'&&onUserSelect('topic',value)}}>
          <SelectTrigger className="w-[200px] text-base border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <SelectValue placeholder="Select Content" />
          </SelectTrigger>
          <SelectContent>
            {storyOptions.map((item) => (
              <SelectItem key={item.id} value={item.title}>
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Conditional TextArea */}
      {selectedOption === 'Custom Prompt' && (
        <div className="mt-4">
          <Textarea
            placeholder="Write a prompt you want to generate video..."
            onChange={(e)=>onUserSelect('topic',e.target.value)}
            className="w-full h-40 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default SelectTopic;
