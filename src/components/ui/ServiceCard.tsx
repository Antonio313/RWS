import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:glow-purple group">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {service.description}
        </p>

        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 w-full">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-cyan-400 flex items-center justify-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
