import { Link } from "react-router-dom";
import { Newspaper, PenTool, Sparkles, BookOpen } from "lucide-react";

function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium">Blog</p>

          <h1 className="text-5xl font-bold mt-3">
            Insights, Updates & AI Ideas
          </h1>

          <p className="mt-5 text-slate-400 text-lg max-w-3xl mx-auto">
            Discover future articles on AI productivity, product updates,
            guides, and industry insights from AMI.
          </p>
        </div>

        {/* Main Empty State */}
        <div className="p-10 rounded-3xl bg-slate-900 border border-slate-800 text-center">

          <div className="w-20 h-20 mx-auto rounded-2xl bg-violet-600/20 flex items-center justify-center mb-6">
            <Newspaper className="text-violet-400" size={36} />
          </div>

          <h2 className="text-4xl font-bold">
            No Articles Published Yet
          </h2>

          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            We’re preparing valuable content on AI tools, productivity,
            tutorials, updates, and smart workflows.
          </p>

          <p className="mt-4 text-slate-500">
            New posts will be available soon.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 font-semibold"
          >
            Back to Home
          </Link>
        </div>

        {/* Upcoming Categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
            <Sparkles className="text-violet-400 mb-4" size={28} />
            <h3 className="text-2xl font-semibold">AI Tips</h3>
            <p className="mt-3 text-slate-400">
              Learn how to use AI smarter in daily work and life.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
            <PenTool className="text-violet-400 mb-4" size={28} />
            <h3 className="text-2xl font-semibold">Product Updates</h3>
            <p className="mt-3 text-slate-400">
              Stay informed about new AMI features and releases.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
            <BookOpen className="text-violet-400 mb-4" size={28} />
            <h3 className="text-2xl font-semibold">Guides</h3>
            <p className="mt-3 text-slate-400">
              Step-by-step tutorials to get the most from AMI.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Blog;