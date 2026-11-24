'use client';

import { useState } from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineMenuAlt2,
  HiOutlineChatAlt2,
  HiOutlineChevronDown,
} from 'react-icons/hi';
import { ConsultProps } from '@/types/templates.types';

export const Consult = ({ data }: ConsultProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consult" className="bg-[var(--color-bg-main)] py-8 lg:py-14 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Centered Scales Icon & Eyebrow */}
        <div className="text-center">
          <FaBalanceScale className="mx-auto text-2xl text-[#C5A059]" />
          <div className="mt-2.5 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-10 bg-[#C5A059]" />
            <span className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#6B1728] uppercase">
              {data.eyebrow}
            </span>
            <span className="h-[1px] w-8 sm:w-10 bg-[#C5A059]" />
          </div>
        </div>

        {/* Two Columns Grid: Left (Headline + Subtitle + Gold Bar + Map) & Right (Form Card) */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Title, Subtitle, Gold Bar, and Map */}
          <div className="flex flex-col lg:col-span-6 xl:col-span-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#221816] sm:text-4xl lg:text-[42px] leading-tight">
              {data.titleStart}{' '}
              <span className="text-[#6B1728]">{data.titleAccent}</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-[#594742] leading-relaxed max-w-xl">
              {data.subtitle}
            </p>

            {/* Warm Gold Accent Bar */}
            <div className="mt-4 mb-6 h-[2.5px] w-16 bg-[#C5A059]" />

            {/* Map Card */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-[#EAE2D5] bg-[#FFFFFF] shadow-sm">
              <div className="relative h-[320px] sm:h-[360px] lg:h-[380px] w-full">
                <iframe
                  title="Juristra Law Associates Map"
                  src={data.mapEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Styled Pin Tooltip Overlay matching screenshot */}
                <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[#DDD4C7] bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#6B1728]" />
                    <span className="text-xs font-bold text-[#221816]">Juristra Law Associates</span>
                  </div>
                  <div className="text-[10px] text-[#C5A059] font-medium pl-3.5">
                    Connaught Place, New Delhi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-6 xl:col-span-6 rounded-2xl border border-[#EAE2D5] bg-[#FAF7F2] p-6 sm:p-8 shadow-sm">
            {/* Form Top Title */}
            <p className="font-serif italic text-base sm:text-lg text-[#6B1728] leading-snug font-medium">
              {data.formTitle}
            </p>

            {/* Subtle Divider */}
            <div className="my-5 border-b border-[#E8DFD5]" />

            {submitted ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center text-green-900">
                <div className="font-serif text-lg font-bold">Inquiry Received</div>
                <p className="mt-1.5 text-xs sm:text-sm text-green-700">
                  Thank you for reaching out. A senior partner will review your inquiry and contact you promptly with complete discretion.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#8A817C]">
                      <HiOutlineUser className="text-lg" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full rounded-lg border border-[#DDD4C7] bg-white py-3 pl-10 pr-3.5 text-xs sm:text-sm text-[#221816] placeholder-[#8A817C] shadow-sm transition-colors focus:border-[#6B1728] focus:outline-none focus:ring-1 focus:ring-[#6B1728]"
                    />
                  </div>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#8A817C]">
                      <HiOutlineUser className="text-lg" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full rounded-lg border border-[#DDD4C7] bg-white py-3 pl-10 pr-3.5 text-xs sm:text-sm text-[#221816] placeholder-[#8A817C] shadow-sm transition-colors focus:border-[#6B1728] focus:outline-none focus:ring-1 focus:ring-[#6B1728]"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address */}
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#8A817C]">
                    <HiOutlineMail className="text-lg" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-[#DDD4C7] bg-white py-3 pl-10 pr-3.5 text-xs sm:text-sm text-[#221816] placeholder-[#8A817C] shadow-sm transition-colors focus:border-[#6B1728] focus:outline-none focus:ring-1 focus:ring-[#6B1728]"
                  />
                </div>

                {/* Row 3: Phone Number */}
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#8A817C]">
                    <HiOutlinePhone className="text-lg" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-[#DDD4C7] bg-white py-3 pl-10 pr-3.5 text-xs sm:text-sm text-[#221816] placeholder-[#8A817C] shadow-sm transition-colors focus:border-[#6B1728] focus:outline-none focus:ring-1 focus:ring-[#6B1728]"
                  />
                </div>

                {/* Row 4: Select a Service */}
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#8A817C]">
                    <HiOutlineMenuAlt2 className="text-lg" />
                  </div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full appearance-none rounded-lg border border-[#DDD4C7] bg-white py-3 pl-10 pr-10 text-xs sm:text-sm text-[#221816] shadow-sm transition-colors focus:border-[#6B1728] focus:outline-none focus:ring-1 focus:ring-[#6B1728]"
                  >
                    <option value="" disabled className="text-[#8A817C]">
                      {data.servicesPlaceholder || 'Select a Service'}
                    </option>
                    {data.serviceOptions?.map((opt, idx) => (
                      <option key={idx} value={opt} className="text-[#221816]">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#8A817C]">
                    <HiOutlineChevronDown className="text-base" />
                  </div>
                </div>

                {/* Row 5: Message Textarea */}
                <div className="relative">
                  <div className="pointer-events-none absolute left-3.5 top-3.5 text-[#8A817C]">
                    <HiOutlineChatAlt2 className="text-lg" />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-[#DDD4C7] bg-white py-3 pl-10 pr-3.5 text-xs sm:text-sm text-[#221816] placeholder-[#8A817C] shadow-sm transition-colors focus:border-[#6B1728] focus:outline-none focus:ring-1 focus:ring-[#6B1728]"
                  />
                </div>

                {/* Row 6: Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#6B1728] py-3.5 text-center font-serif text-base sm:text-lg font-bold text-white shadow-md transition-all duration-200 hover:bg-[#52101E] active:scale-[0.99]"
                >
                  {data.submitText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

