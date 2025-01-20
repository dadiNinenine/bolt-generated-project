import React, { useState } from 'react';
    import { Search, Bell, ChevronRight, ChevronLeft, Play, Info, ChevronDown, X, Plus, ThumbsUp, ThumbsDown } from 'lucide-react';
    
    // Mock data for demonstration
    const categories = [
      {
        title: "Trending Now",
        items: [
          { id: 1, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=280&fit=crop", title: "Movie 1" },
          { id: 2, image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&h=280&fit=crop", title: "Movie 2" },
          { id: 3, image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=280&fit=crop", title: "Movie 3" },
          { id: 4, image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=500&h=280&fit=crop", title: "Movie 4" },
          { id: 5, image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=500&h=280&fit=crop", title: "Movie 5" },
        ]
      },
      {
        title: "New Releases",
        items: [
          { id: 6, image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=500&h=280&fit=crop", title: "Movie 6" },
          { id: 7, image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&h=280&fit=crop", title: "Movie 7" },
          { id: 8, image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=280&fit=crop", title: "Movie 8" },
          { id: 9, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=280&fit=crop", title: "Movie 9" },
          { id: 10, image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&h=280&fit=crop", title: "Movie 10" },
        ]
      }
    ];
    
    function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 pt-20">
          <div className="bg-[#181818] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            {children}
          </div>
        </div>
      );
    }
    
    function NavDropdown({ title, items }: { title: string; items: string[] }) {
      const [isOpen, setIsOpen] = useState(false);
    
      return (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
          >
            {title}
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    
    function ProfileDropdown() {
      const [isOpen, setIsOpen] = useState(false);
    
      return (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 text-gray-300 hover:text-white"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=faces"
              alt="Profile"
              className="w-8 h-8 rounded"
            />
            <ChevronDown className="h-4 w-4" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  Account
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  Settings
                </a>
                <hr className="my-1 border-gray-700" />
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    function Navbar() {
      const [isScrolled, setIsScrolled] = useState(false);
    
      React.useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-red-600 text-2xl font-bold">NETFLIX</span>
                <div className="hidden md:block ml-8">
                  <div className="flex items-baseline space-x-4">
                    <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Home</a>
                    <NavDropdown 
                      title="TV Shows" 
                      items={["Popular", "New Releases", "Netflix Originals", "Action", "Comedy", "Drama"]} 
                    />
                    <NavDropdown 
                      title="Movies" 
                      items={["Popular", "New Releases", "Action", "Comedy", "Horror", "Documentary"]} 
                    />
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">My List</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <Search className="h-5 w-5 text-gray-300 cursor-pointer hover:text-white" />
                <Bell className="h-5 w-5 text-gray-300 cursor-pointer hover:text-white" />
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </nav>
      );
    }
    
    function MovieCarousel({ title, items }: { title: string; items: any[] }) {
      const [scrollPosition, setScrollPosition] = useState(0);
      const [showModal, setShowModal] = useState(false);
    
      const scroll = (direction: 'left' | 'right') => {
        const container = document.getElementById(`carousel-${title}`);
        if (container) {
          const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          setScrollPosition(container.scrollLeft + scrollAmount);
        }
      };
    
      return (
        <div className="relative group">
          <h2 className="text-white text-xl font-semibold mb-4 px-4">{title}</h2>
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ display: scrollPosition <= 0 ? 'none' : 'block' }}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <div
              id={`carousel-${title}`}
              className="flex space-x-4 overflow-x-hidden scroll-smooth px-4"
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[300px] transform transition-transform duration-300 hover:scale-105 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md object-cover w-full h-[169px]"
                  />
                  <div onClick={() => setShowModal(true)}>
                    <MovieHoverDetails item={item} />
                  </div>
                  <Modal isOpen={showModal} onClose={() => setShowModal(false)}><div className="p-4 md:p-8"></div></Modal>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      );
    }
    
    function App() {
      const [showModal, setShowModal] = useState(false);
    
      return (
        <div className="min-h-screen bg-[#141414]">
          <Navbar />          
          
          {/* Hero Section */}
          <div className="relative h-[80vh] w-full">
            <div className="absolute inset-0">
              <img
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/stranger-things.jpg"
                alt="Stranger Things"
                className="w-full h-full object-cover"
              />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" style={{ backgroundImage: `url(https://s.isanook.com/mv/0/ui/24/124481/Netflix_Stranger-Things_Group-shot-S1.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
        
        <div className="relative h-full flex items-center">
          <div className="pl-4 sm:pl-6 lg:pl-8">
            <div className="max-w-lg">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">Stranger Things</h1>
              <p className="text-lg text-gray-300 mb-10">
                When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center px-8 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors z-10 relative">
                  <Play className="h-5 w-5 mr-2" />
                  Play
                </button>
                <button 
                  onClick={() => setShowModal(true)}
                  className="flex items-center px-8 py-3 bg-gray-500/70 text-white rounded hover:bg-gray-500/90 transition-colors"
                >
                  <Info className="h-5 w-5 mr-2" />
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
          {/* Content Sections */}          
          <div className="relative z-10 pb-20 space-y-12 mt-4">
            {categories.map((category) => (
              <MovieCarousel key={category.title} {...category} />
            ))}
          </div>
    
          {/* More Info Modal */}
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <div className="p-4 md:p-8">
              <div className="relative mb-4 overflow-hidden" style={{backgroundImage: `url(https://s.isanook.com/mv/0/ui/24/124481/Netflix_Stranger-Things_Group-shot-S3.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '150px', width: '100%'}}>
                <img
                  src="https://s.isanook.com/mv/0/ui/24/124481/Netflix_Stranger-Things_Group-shot-S3.jpg"
                  alt="Stranger Things"
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors">
                    <Plus className="h-5 w-5 text-white" />
                  </button>
                  <LikeDislikeButton />
                </div>
              </div>
              <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">Stranger Things</h2>
                  <div className="flex items-center gap-2 md:gap-4 text-sm text-gray-400 mb-6">
                    <span>2016-2024</span>
                    <span>4 Seasons</span>
                    <span>34 Episodes</span>
                    <span className="px-2 py-1 border border-gray-400 rounded">TV-14</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries. Created by The Duffer Brothers, this supernatural drama series spans multiple seasons, each uncovering new layers of the mysterious happenings in Hawkins.                
                  </p>
                  <div className="flex space-x-4 mb-6 items-center relative z-10">
                    <button className="flex items-center px-8 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors">
                      <Play className="h-5 w-5 mr-2" />
                        Play
                    </button>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-2">Seasons:</h3>
                    <div className="text-gray-300">
                      <p>Season 1 (2016) - 8 Episodes</p>
                      <p>Season 2 (2017) - 9 Episodes</p>
                      <p>Season 3 (2019) - 8 Episodes</p>
                      <p>Season 4 (2022) - 9 Episodes</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-64">
                  <h3 className="text-white font-semibold mb-4">Cast</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>Millie Bobby Brown as Eleven</p>
                    <p>Finn Wolfhard as Mike Wheeler</p>
                    <p>Noah Schnapp as Will Byers</p>
                    <p>Caleb McLaughlin as Lucas Sinclair</p>
                    <p>Gaten Matarazzo as Dustin Henderson</p>
                    <p>Sadie Sink as Max Mayfield</p>
                    <p>Joe Keery as Steve Harrington</p>
                    <p>Natalia Dyer as Nancy Wheeler</p>
                  </div>
                </div>
              </div>          
              <div className="mt-6">
                <h3 className="text-white font-semibold mb-4">Genres</h3>
                <div className="text-gray-300">Sci-Fi, Horror, Drama</div>
              </div>
            </div>
          </Modal>
        </div>
      );
    }
    
    function LikeDislikeButton() {
      const [showOptions, setShowOptions] = useState(false);
    
      return (
        <div className="relative group">
          <button
            className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
          >
            <ThumbsUp className="h-5 w-5 text-white" />
          </button>
          {showOptions && (
            <div
              className="absolute top-0 right-12 mt-0 w-32 bg-black/90 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10 group-hover:block"
              onMouseEnter={() => setShowOptions(true)}
              onMouseLeave={() => setShowOptions(false)}
            >
              <div className="py-1">
                <button className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 w-full justify-start">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Like
                </button>
                <button className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 w-full justify-start">
                  <ThumbsDown className="h-4 w-4 mr-2" />
                  Dislike
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    function MovieHoverDetails({ item }: { item: any }) {
      const [isHovered, setIsHovered] = useState(false);
    
      return (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex space-x-2">
                <button className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors">
                  <Play className="h-4 w-4" />
                </button>
                <button className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors">
                  <Plus className="h-4 w-4 text-white" />
                </button>
                <button className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors">
                  <ThumbsUp className="h-4 w-4 text-white" />
                </button>
              </div>
              <button className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors">
                <ChevronDown className="h-4 w-4 text-white" onClick={() => setShowModal(true)} />
              </button>
            </div>
            <div className="text-sm text-gray-300">
              <span className="text-white font-semibold">10+</span>
              <span> 1 ชั่วโมง 34 นาที </span>
              <span className="text-gray-400">HD</span>
            </div>
            <div className="text-sm text-gray-400">ระทึกใจ • ตื่นเต้น • แอ็คชั่นระทึกขวัญ</div>
            <div className="text-sm text-gray-400 flex items-center"><ThumbsUp className="h-4 w-4 text-red-600 mr-1" />ถูกใจที่สุด</div>
          </div>
        </div>
      );
    }
    
    export default App;
