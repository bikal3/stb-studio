const hours = [
  { day: 'Monday',    time: '11:00 am – 7:00 pm' },
  { day: 'Tuesday',   time: '11:00 am – 7:00 pm' },
  { day: 'Wednesday', time: '11:00 am – 7:00 pm' },
  { day: 'Thursday',  time: '11:00 am – 7:00 pm' },
  { day: 'Friday',    time: '11:00 am – 7:00 pm' },
  { day: 'Saturday',  time: '11:00 am – 7:00 pm' },
  { day: 'Sunday',    time: '11:00 am – 7:00 pm' },
]

export default function OpenHours() {
  return (
    <section className="bg-ink px-8 py-14 flex flex-col items-center text-center">
      <p className="text-[10px] tracking-[4px] uppercase font-sans text-accent mb-4">
        We are open
      </p>
      <h2 className="font-serif italic font-light text-warm-white text-5xl md:text-6xl leading-tight mb-2">
        7 Days a Week
      </h2>
      <p className="text-[13px] tracking-[4px] uppercase font-sans text-warm-white mb-10">
        Walk-ins Welcome
      </p>

      <div className="w-full max-w-sm">
        {hours.map(({ day, time }, i) => (
          <div
            key={day}
            className={`flex justify-between items-center px-4 py-3 ${
              i < hours.length - 1 ? 'border-b border-warm-grey/15' : ''
            }`}
          >
            <span className="text-[13px] font-sans text-muted tracking-wide">{day}</span>
            <span className="text-[13px] font-sans text-warm-white tracking-wide">{time}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
