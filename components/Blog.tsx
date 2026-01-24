import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost, Comment } from '../types';
import { Calendar, User, Clock, ArrowRight, X, MessageSquare, Send } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Extract unique categories
  const categories = ['全部', ...new Set(BLOG_POSTS.map(post => post.category))];

  // Filter posts
  const filteredPosts = selectedCategory === '全部' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">最新文章</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">分享技术见解、生活感悟与创意灵感</p>
        </div>

        {/* Categories Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              className="group bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 border border-white/10">
                  {post.category}
                </div>
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <button 
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mt-auto group/btn"
                >
                  阅读全文 <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Post Modal */}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

// Separate Modal Component for cleaner code
const PostModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
  const [comments, setComments] = useState<Comment[]>(post.comments);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim() || !authorName.trim()) return;
    
    const comment: Comment = {
      id: Date.now(),
      author: authorName,
      date: new Date().toISOString().split('T')[0],
      content: newComment
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose}></div>

      {/* Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scale-in">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900 z-10">
          <span className="text-sm text-gray-400 font-mono">/blog/{post.id}</span>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">{post.category}</span>
              <span className="text-gray-500 text-sm flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden mb-8">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-gray-300 mb-12 border-b border-white/10 pb-12">
             {/* Simple renderer for newlines in mock content */}
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph.startsWith('###') ? <h3 className="text-xl font-bold text-white mt-8 mb-4">{paragraph.replace('###', '')}</h3> : 
                 paragraph.startsWith('**') ? <strong>{paragraph.replace(/\*\*/g, '')}</strong> :
                 paragraph}
              </p>
            ))}
          </div>

          {/* Comments Section */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <MessageSquare className="text-cyan-400" /> 评论 ({comments.length})
            </h3>

            {/* Comment List */}
            <div className="space-y-6 mb-10">
              {comments.length === 0 ? (
                <div className="text-center py-8 text-gray-500 bg-slate-800/30 rounded-xl">
                  暂无评论，来坐沙发吧！
                </div>
              ) : (
                comments.map(comment => (
                  <div key={comment.id} className="bg-slate-800/40 p-5 rounded-xl border border-white/5">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
                          {comment.author.charAt(0)}
                        </div>
                        <span className="font-medium text-slate-200">{comment.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed pl-10">{comment.content}</p>
                  </div>
                ))
              )}
            </div>

            {/* Comment Form */}
            <div className="bg-slate-800/60 p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">发表评论</h4>
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="你的昵称"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="写下你的想法..."
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={handleAddComment}
                    disabled={!authorName.trim() || !newComment.trim()}
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                      authorName.trim() && newComment.trim()
                        ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Send size={16} /> 发送
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;