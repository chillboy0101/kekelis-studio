import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    image: '/layout-19-1.jpg',
    title: 'A Beautiful Wedding Session',
    date: 'January 1, 2026',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl in velit dignissim mollis nisl in elit. Sed eget enim turpis. In hac habitasse platea dictumst...',
  },
  {
    image: '/layout-19-2.jpg',
    title: 'Capturing the Perfect Moment',
    date: 'January 5, 2026',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl in velit dignissim mollis nisl in elit. Sed eget enim turpis. In hac habitasse platea dictumst...',
  },
  {
    image: '/layout-19-3.jpg',
    title: 'Brand Photography Tips',
    date: 'January 12, 2026',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl in velit dignissim mollis nisl in elit. Sed eget enim turpis. In hac habitasse platea dictumst...',
  },
];

export default function Blog008() {
  return (
    <main className="py-8 px-6">
      <div className="container mx-auto">
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <Link
              key={post.title}
              href="#"
              className={`block group ${index < blogPosts.length - 1 ? 'border-b border-mono-4 pb-12' : ''}`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 font-cormorant-garamond text-mono-1 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-sm text-mono-2 mb-4 font-semibold">{post.date}</p>
                  <p className="text-mono-2">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 text-mono-1 font-semibold gap-4">
          <button className="hover:text-primary transition-colors">← Previous</button>
          <div className="flex space-x-2">
            <button className="hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">1</button>
            <button className="hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">2</button>
            <button className="hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">3</button>
          </div>
          <button className="hover:text-primary transition-colors">Next →</button>
        </div>
      </div>
    </main>
  );
}
