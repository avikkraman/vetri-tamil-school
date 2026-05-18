import fs from 'fs'
import path from 'path'

export interface SchoolEvent {
  id: number
  title: string
  date: string       // YYYY-MM-DD
  time: string
  location: string
  description: string
  category: string
}

function parseRow(row: string): string[] {
  const fields: string[] = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < row.length; i++) {
    const ch = row[i]
    if (ch === '"') {
      inQuotes = !inQuotes
    } else if (ch === ',' && !inQuotes) {
      fields.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  fields.push(current.trim())
  return fields
}

export function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  return `${months[month - 1]} ${day}, ${year}`
}

export function loadEvents(): SchoolEvent[] {
  const csvPath = path.join(process.cwd(), 'public', 'events.csv')
  const raw = fs.readFileSync(csvPath, 'utf-8')
  const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean)

  // first line is header — derive column indices dynamically
  const headers = parseRow(lines[0]).map((h) => h.toLowerCase())
  const col = (name: string) => headers.indexOf(name)

  return lines.slice(1).map((line, i) => {
    const f = parseRow(line)
    return {
      id: i + 1,
      title: f[col('name')] ?? '',
      date: f[col('date')] ?? '',
      time: f[col('time')] ?? '',
      location: f[col('location')] ?? '',
      description: f[col('purpose')] ?? '',
      category: f[col('category')] || 'General',
    }
  })
}
