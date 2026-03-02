import CountUp from "../components/CountUp";
import ScrollReveal from "../components/ScrollReveal";
import { Factory, MonitorSmartphone, Users, Award } from "lucide-react";

const stats = [
    { icon: Factory, value: 365000, suffix: " sq. ft.", label: "Manufacturing Footprint" },
    { icon: MonitorSmartphone, value: 15000, suffix: " Units/Mo", label: "Peak TV Capacity" },
    { icon: Users, value: 350, suffix: "+", label: "Dedicated Professionals" },
    { icon: Award, value: 4, suffix: "", label: "Global Accreditations" },
];

const StatsBar = () => (
    <section className="relative py-16 bg-blue-deep">
        <div className="container mx-auto px-4">
            <ScrollReveal>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <stat.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <div className="font-heading text-3xl md:text-3xl font-bold text-primary-foreground mb-1">
                                <CountUp end={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
    </section>
);

export default StatsBar;
