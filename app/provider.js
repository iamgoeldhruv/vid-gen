'use client'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { db } from '../configs/db';
import { Users } from '../configs/schema';
import { eq } from 'drizzle-orm';

const Provider = ({ children }) => {
  const { user } = useUser();
  console.log("user is", user);

  useEffect(() => {
    if (user && user.primaryEmailAddress?.emailAddress) {
      isNewUser();
    }
  }, [user]);

  const isNewUser = async () => {
    try {
      const emailAddress = user?.primaryEmailAddress?.emailAddress;
      if (!emailAddress) return;

      const result = await db.select().from(Users).where(eq(Users.email, emailAddress));
      
      if (!result[0]) {
        await db.insert(Users).values({
          name: user.fullName || 'Unknown', // Fallback if name is null
          email: emailAddress,
          imageUrl: user.imageUrl || '', // Fallback if image is null
        });
      }
    } catch (error) {
      console.error('Error checking/inserting user:', error);
    }
  };

  return <div>{children}</div>;
};

export default Provider;
