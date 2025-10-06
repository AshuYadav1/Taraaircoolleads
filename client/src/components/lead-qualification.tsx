import { useState } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

interface LeadQualificationProps {
  onQualified: (leadData: any) => void;
  onClose: () => void;
}

export default function LeadQualification({ onQualified, onClose }: LeadQualificationProps) {
  const { trackEvent } = useAnalytics();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    urgency: "",
    area: "",
    budget: "",
    acType: "",
    issue: "",
    name: "",
    phone: "",
    address: "",
    preferredTime: "",
    source: "lead_qualification"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    trackEvent("lead_qualification_step", { step, data: formData });
    setStep(step + 1);
  };

  const handleSubmit = () => {
    trackEvent("lead_qualified", formData);
    onQualified(formData);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.serviceType && formData.urgency;
      case 2:
        return formData.area && formData.budget;
      case 3:
        return formData.acType && formData.issue;
      case 4:
        return formData.name && formData.phone;
      default:
        return false;
    }
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">What AC service do you need?</h3>
            <div className="space-y-3">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50">
                <input
                  type="radio"
                  name="serviceType"
                  value="repair"
                  checked={formData.serviceType === "repair"}
                  onChange={(e) => handleInputChange("serviceType", e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">AC Repair</div>
                  <div className="text-sm text-gray-600">AC not cooling, gas filling, water leakage</div>
                </div>
              </label>
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50">
                <input
                  type="radio"
                  name="serviceType"
                  value="installation"
                  checked={formData.serviceType === "installation"}
                  onChange={(e) => handleInputChange("serviceType", e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">AC Installation</div>
                  <div className="text-sm text-gray-600">New AC installation with proper mounting</div>
                </div>
              </label>
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50">
                <input
                  type="radio"
                  name="serviceType"
                  value="amc"
                  checked={formData.serviceType === "amc"}
                  onChange={(e) => handleInputChange("serviceType", e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">AC AMC</div>
                  <div className="text-sm text-gray-600">Annual maintenance contract</div>
                </div>
              </label>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">How urgent is your service?</h4>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center p-2 border rounded cursor-pointer hover:bg-red-50">
                  <input
                    type="radio"
                    name="urgency"
                    value="emergency"
                    checked={formData.urgency === "emergency"}
                    onChange={(e) => handleInputChange("urgency", e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Emergency (Today)</span>
                </label>
                <label className="flex items-center p-2 border rounded cursor-pointer hover:bg-orange-50">
                  <input
                    type="radio"
                    name="urgency"
                    value="urgent"
                    checked={formData.urgency === "urgent"}
                    onChange={(e) => handleInputChange("urgency", e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Urgent (This Week)</span>
                </label>
                <label className="flex items-center p-2 border rounded cursor-pointer hover:bg-yellow-50">
                  <input
                    type="radio"
                    name="urgency"
                    value="normal"
                    checked={formData.urgency === "normal"}
                    onChange={(e) => handleInputChange("urgency", e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Normal (Next Week)</span>
                </label>
                <label className="flex items-center p-2 border rounded cursor-pointer hover:bg-green-50">
                  <input
                    type="radio"
                    name="urgency"
                    value="planning"
                    checked={formData.urgency === "planning"}
                    onChange={(e) => handleInputChange("urgency", e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Planning (Later)</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Service Area & Budget</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Area</label>
                <select
                  value={formData.area}
                  onChange={(e) => handleInputChange("area", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                >
                  <option value="">Select your area</option>
                  <option value="Dahisar">Dahisar</option>
                  <option value="Borivali">Borivali</option>
                  <option value="Mira Road">Mira Road</option>
                  <option value="Kandivali">Kandivali</option>
                  <option value="Malad">Malad</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="500-1000">₹500 - ₹1,000</option>
                  <option value="1000-2000">₹1,000 - ₹2,000</option>
                  <option value="2000-5000">₹2,000 - ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000+">₹10,000+</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">AC Details</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">AC Type</label>
                <select
                  value={formData.acType}
                  onChange={(e) => handleInputChange("acType", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                >
                  <option value="">Select AC type</option>
                  <option value="split">Split AC</option>
                  <option value="window">Window AC</option>
                  <option value="cassette">Cassette AC</option>
                  <option value="ductable">Ductable AC</option>
                  <option value="new">New AC (Installation)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Main Issue</label>
                <select
                  value={formData.issue}
                  onChange={(e) => handleInputChange("issue", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                >
                  <option value="">Select main issue</option>
                  <option value="not-cooling">AC not cooling</option>
                  <option value="gas-leak">Gas leak</option>
                  <option value="water-leakage">Water leakage</option>
                  <option value="noise">Unusual noise</option>
                  <option value="not-starting">AC not starting</option>
                  <option value="installation">New installation</option>
                  <option value="maintenance">Regular maintenance</option>
                  <option value="other">Other issue</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter your complete address"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 6 PM)</option>
                  <option value="night">Night (6 PM - 9 PM)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Lead Summary</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Service:</span>
                <span className="capitalize">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Urgency:</span>
                <span className="capitalize">{formData.urgency}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Area:</span>
                <span>{formData.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Budget:</span>
                <span>{formData.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">AC Type:</span>
                <span className="capitalize">{formData.acType}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Issue:</span>
                <span className="capitalize">{formData.issue?.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>{formData.phone}</span>
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Lead Quality:</strong> {getLeadQuality()}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getLeadQuality = () => {
    let score = 0;
    if (formData.urgency === "emergency") score += 3;
    if (formData.urgency === "urgent") score += 2;
    if (formData.area && ["Dahisar", "Borivali", "Mira Road"].includes(formData.area)) score += 2;
    if (formData.budget && ["1000-2000", "2000-5000", "5000-10000", "10000+"].includes(formData.budget)) score += 2;
    if (formData.phone && formData.phone.length >= 10) score += 1;

    if (score >= 6) return "High Quality - Priority Lead";
    if (score >= 4) return "Medium Quality - Good Lead";
    return "Low Quality - Needs Follow-up";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Lead Qualification</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Step {step} of 5</span>
              <span>{Math.round((step / 5) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-trust-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          {getStepContent()}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                ← Previous
              </button>
            )}
            <div className="ml-auto">
              {step < 5 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="px-6 py-2 bg-trust-blue text-white rounded-lg hover:bg-trust-blue-light disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit Lead
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
