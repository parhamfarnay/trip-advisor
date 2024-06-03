"use client";
import { I18nProviderClient } from "@/locales/client";
import React from "react";

function ClientLayout({ locale, children }) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}

export default ClientLayout;
