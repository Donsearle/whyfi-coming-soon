import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-sm mx-auto w-full">
      <span className="inline-block px-3 py-1 glass text-purple-300 rounded-full text-xs font-medium mb-6 border border-purple-400/30">
        Get Started
      </span>
      
      <h3 className="text-xl font-medium text-white mb-6">Create Account</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white placeholder-white/50 bg-transparent focus:border-purple-400 focus:outline-none transition focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white placeholder-white/50 bg-transparent focus:border-purple-400 focus:outline-none transition focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="you@example.com"
          />
        </div>
        
        <div>
          <Label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white placeholder-white/50 bg-transparent focus:border-purple-400 focus:outline-none transition focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Create password"
          />
        </div>
        
        <Button
          type="submit"
          className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 text-white rounded-lg font-medium hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-500 transition duration-200 transform hover:scale-[1.02] shadow-lg border-none"
        >
          Sign Up
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-white/60 text-sm">
          Already have an account?{' '}
          <a href="#" className="text-purple-400 hover:text-purple-300 transition">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}