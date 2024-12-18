import React from 'react';
import { Tabs } from '../../components/profile/Tabs';
import { PersonalInfo } from '../../components/profile/PersonalInfo';
import { SecuritySettings } from '../../components/profile/SecuritySettings';
import { AddressBook } from '../../components/profile/AddressBook';
import { NotificationSettings } from '../../components/profile/NotificationSettings';

export function ProfileSettings() {
  const tabs = [
    { id: 'personal', label: 'Personal Info', component: PersonalInfo },
    { id: 'security', label: 'Security', component: SecuritySettings },
    { id: 'addresses', label: 'Addresses', component: AddressBook },
    { id: 'notifications', label: 'Notifications', component: NotificationSettings },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}