import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

const SelectTopic = () => {
  const storyOptions = [
    { id: 1, title: 'Adventure' },
    { id: 2, title: 'Mystery' },
    { id: 3, title: 'Romance' },
    { id: 4, title: 'Science Fiction' },
    { id: 5, title: 'Fantasy' },
    { id: 6, title: 'Horror' },
    { id: 7, title: 'Historical Fiction' },
    { id: 8, title: 'Comedy' },
  ];

  return (
    <div>
      <h1>Content</h1>
      <p>What is the topic of your video?</p>
      <Select>
        <SelectTrigger className="w-[180px]">
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
  );
};

export default SelectTopic;
