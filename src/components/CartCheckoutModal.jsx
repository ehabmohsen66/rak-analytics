import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  CreditCard, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  ArrowRight,
  Mail,
  Key
} from 'lucide-react';

export default function CartCheckoutModal({ 
  isOpen, 
  onClose, 
  cartItems, 
  removeFromCart, 
  clearCart,
  openSubscriberPortal
}) {
  const [selectedGateway, setSelectedGateway] = useState('paytabs'); // PayTabs, Visa, MasterCard, PayPal
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'payment' | 'success'
  const [formData, setFormData] = useState({
    companyName: '',
    subscriberEmail: '',
    adminName: '',
    cardNumber: '•••• •••• •••• 4242',
    expDate: '12/28',
    cvv: '921'
  });

  if (!isOpen) return null;

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 149), 0);
  // Auto bundle discount if 3 or more items
  const discount = cartItems.length >= 3 ? Math.round(subtotal * 0.20) : 0;
  const total = subtotal - discount;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const handleFinish = () => {
    clearCart();
    setCheckoutStep('cart');
    onClose();
    openSubscriberPortal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-brand-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {checkoutStep === 'cart' && (
          /* Step 1: Cart Items Review */
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ef6000]">
                Subscription Cart
              </span>
              <h2 className="text-2xl font-extrabold text-[#212529]">
                Selected Analytical Dashboards
              </h2>
              <p className="text-xs text-gray-500">
                Review your chosen dashboards, modules, and multi-dashboard bundle savings.
              </p>
            </div>

            {cartItems.length === 0 ? (
              <div className="p-12 text-center border border-dashed border-gray-300 rounded-brand-lg space-y-3">
                <CreditCard className="w-10 h-10 text-gray-300 mx-auto" />
                <div className="text-sm font-bold text-gray-700">Your subscription cart is empty</div>
                <p className="text-xs text-gray-500">
                  Browse our Solutions Catalog to add individual dashboards or complete module bundles.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-4 rounded-brand-md bg-gray-50 border border-gray-200"
                  >
                    <div>
                      <div className="text-sm font-bold text-[#212529]">{item.title}</div>
                      <div className="text-xs text-gray-500">
                        {item.department} • {item.isSuite ? 'Unlimited Suite' : 'Individual Dashboard License'}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-extrabold text-[#212529]">
                          ${item.price}<span className="text-[10px] text-gray-500">/mo</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Subtotal & Discount Breakdown */}
                <div className="pt-4 border-t border-gray-200 space-y-2 text-xs">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold">${subtotal} / month</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 font-bold">
                      <span>Multi-Dashboard Bundle Discount (20%)</span>
                      <span>-${discount} / month</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-extrabold text-[#212529] pt-2 border-t border-gray-200">
                    <span>Total Recurring Subscription</span>
                    <span className="text-[#ef6000]">${total} / month</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setCheckoutStep('payment')}
                    className="w-full py-3 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs uppercase tracking-wider rounded-brand-md shadow-brand-card transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Regional Gateway Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {checkoutStep === 'payment' && (
          /* Step 2: Payment Gateway Selection */
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ef6000]">
                Step 2: Regional Payment Gateway
              </span>
              <h2 className="text-2xl font-extrabold text-[#212529]">
                Secure Subscription Checkout
              </h2>
              <p className="text-xs text-gray-500">
                Select your preferred regional payment gateway to activate credentials.
              </p>
            </div>

            {/* Gateway Radios (Visa, MasterCard, PayPal, PayTabs) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'paytabs', name: 'PayTabs', sub: 'Regional GCC / ME' },
                { id: 'visa', name: 'Visa', sub: 'Credit / Debit' },
                { id: 'mastercard', name: 'MasterCard', sub: 'International' },
                { id: 'paypal', name: 'PayPal', sub: 'Digital Wallet' }
              ].map((gw) => (
                <div
                  key={gw.id}
                  onClick={() => setSelectedGateway(gw.id)}
                  className={`p-3 rounded-brand-md border cursor-pointer text-center transition-all ${
                    selectedGateway === gw.id
                      ? 'border-[#ef6000] bg-orange-50 text-[#ef6000] ring-1 ring-[#ef6000]'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-extrabold text-sm">{gw.name}</div>
                  <div className="text-[10px] text-gray-500">{gw.sub}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Arab Pharma Group"
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Admin Email for Login Credentials *</label>
                  <input
                    type="email"
                    required
                    value={formData.subscriberEmail}
                    onChange={(e) => setFormData({ ...formData, subscriberEmail: e.target.value })}
                    placeholder="admin@company.com"
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                  />
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-brand-md border border-gray-200 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Card Information via {selectedGateway.toUpperCase()} Gateway</span>
                  <Lock className="w-3.5 h-3.5 text-green-600" />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-brand-md font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={formData.expDate}
                    onChange={(e) => setFormData({ ...formData, expDate: e.target.value })}
                    className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-brand-md font-mono text-center"
                  />
                  <input
                    type="text"
                    required
                    value={formData.cvv}
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-brand-md font-mono text-center"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="text-xs font-bold text-gray-500 hover:text-gray-800"
                >
                  ← Back to Cart
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs uppercase tracking-wider rounded-brand-md shadow-brand-card transition-all"
                >
                  Confirm & Pay ${total}/mo
                </button>
              </div>
            </form>
          </div>
        )}

        {checkoutStep === 'success' && (
          /* Step 3: Instant Confirmation & Credentials (Docx Requirement) */
          <div className="space-y-6 text-center py-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h2 className="text-2xl font-extrabold text-[#212529]">
                Subscription Confirmed!
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                An automatic email confirmation containing your login credentials (username & temporary password) has been dispatched to:
              </p>
              <div className="p-2 bg-gray-100 rounded text-xs font-mono font-bold text-[#ef6000]">
                {formData.subscriberEmail || "subscriber@enterprise.com"}
              </div>
            </div>

            {/* Credential Notification Box */}
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-brand-md p-4 text-left text-xs text-gray-700 space-y-2 max-w-md mx-auto">
              <div className="flex items-center gap-2 font-bold text-[#212529]">
                <Key className="w-4 h-4 text-[#ef6000]" />
                <span>Immediate Portal Access Enabled</span>
              </div>
              <p className="text-gray-500 text-[11px]">
                Your account dashboard is now active. You have full access to premium interactive dashboards, raw CSV ledger exports, and downloadable data sheets.
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={handleFinish}
                className="px-8 py-3 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs uppercase tracking-wider rounded-brand-md shadow-brand-card transition-all"
              >
                Go to Subscriber Portal Now
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
