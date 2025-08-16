"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function CourseFinder() {
  const [keyword, setKeyword] = useState("")
  const [month, setMonth] = useState("")
  const [category, setCategory] = useState("")
  const [city, setCity] = useState("")
  const [duration, setDuration] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ keyword, month, category, city, duration })
    // Implement search functionality
  }

  return (
    <section className="relative z-20 bg-slate-900 py-12 -mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">COURSE FINDER</h2>
          <div className="w-16 h-1 bg-secondary"></div>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <Input
              type="text"
              placeholder="Keywords"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
            />
          </div>

          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
              <SelectValue placeholder="Choose a month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="january">January</SelectItem>
              <SelectItem value="february">February</SelectItem>
              <SelectItem value="march">March</SelectItem>
              <SelectItem value="april">April</SelectItem>
              <SelectItem value="may">May</SelectItem>
              <SelectItem value="june">June</SelectItem>
              <SelectItem value="july">July</SelectItem>
              <SelectItem value="august">August</SelectItem>
              <SelectItem value="september">September</SelectItem>
              <SelectItem value="october">October</SelectItem>
              <SelectItem value="november">November</SelectItem>
              <SelectItem value="december">December</SelectItem>
            </SelectContent>
          </Select>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
              <SelectValue placeholder="Choose a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="leadership">Leadership & Management</SelectItem>
              <SelectItem value="finance">Finance and Accounting</SelectItem>
              <SelectItem value="hrm">Human Resources Management</SelectItem>
              <SelectItem value="project">Project Management</SelectItem>
              <SelectItem value="marketing">Marketing and Sales</SelectItem>
              <SelectItem value="it">Oil and Gas Technology</SelectItem>
            </SelectContent>
          </Select>

          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
              <SelectValue placeholder="Choose a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="london">London</SelectItem>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="istanbul">Istanbul</SelectItem>
              <SelectItem value="paris">Paris</SelectItem>
              <SelectItem value="newyork">New York</SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit" className="bg-secondary text-black hover:bg-white h-12">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>
      </div>
    </section>
  )
}
