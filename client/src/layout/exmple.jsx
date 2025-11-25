
import { PlayCircle, BarChart3, UserPlus, Bookmark, Users, Gamepad2, Settings, Save } from 'lucide-react';

export default function Sidebar() {
    const exploreItems = [
        { icon: PlayCircle, label: 'Learning', badge: 'New', href: '#0' },
        { icon: BarChart3, label: 'Insights', href: '#0' },
        { icon: UserPlus, label: 'Find friends', href: 'find-friends.html' },
        { icon: Bookmark, label: 'Bookmarks', href: '#0' },
        { icon: Users, label: 'Group', href: 'group.html' },
        { icon: Gamepad2, label: 'Gaming', badge: 'New', href: '#0' },
        { icon: Settings, label: 'Settings', href: '#0' },
        { icon: Save, label: 'Save post', href: '#0' },
    ];

    const suggestedPeople = [
        { name: 'Steve Jobs', title: 'CEO of Apple', image: 'https://via.placeholder.com/48', href: 'profile.html' },
        { name: 'Ryan Roslansky', title: 'CEO of Linkedin', image: 'https://via.placeholder.com/48', href: 'profile.html' },
        { name: 'Dylan Field', title: 'CEO of Figma', image: 'https://via.placeholder.com/48', href: 'profile.html' },
    ];

    const events = [
        { date: '10', month: 'Jul', title: 'No more terrorism no more cry', going: 17, image: 'https://via.placeholder.com/280x120', href: 'event-single.html' },
        { date: '10', month: 'Jul', title: 'No more terrorism no more cry', going: 17, image: 'https://via.placeholder.com/280x120', href: 'event-single.html' },
    ];

    return (
        <div className="w-full lg:w-1/4 xl:w-1/4">
            <div className="_layout_left_sidebar_wrap">
                {/* Explore Section */}
                <div className="_layout_left_sidebar_inner mb-6">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 _feed_inner_area">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6 _title5">
                            Explore
                        </h4>
                        <ul className="space-y-1">
                            {exploreItems.map((item, index) => (
                                <li key={index} className="flex items-center justify-between _explore_item">
                                    <a href={item.href} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                                        <item.icon size={20} className="flex-shrink-0" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </a>
                                    {item.badge && (
                                        <span className="text-xs font-medium text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                      {item.badge}
                    </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Suggested People Section */}
                <div className="_layout_left_sidebar_inner mb-6">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 _feed_inner_area">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 _title5">
                                Suggested People
                            </h4>
                            <a href="#0" className="text-sm text-blue-500 hover:underline">
                                See All
                            </a>
                        </div>
                        <div className="space-y-4">
                            {suggestedPeople.map((person, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <a href={person.href}>
                                            <img src={person.image} alt={person.name} className="w-12 h-12 rounded-full object-cover" />
                                        </a>
                                        <div>
                                            <a href={person.href}>
                                                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-500">
                                                    {person.name}
                                                </h4>
                                            </a>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {person.title}
                                            </p>
                                        </div>
                                    </div>
                                    <a href="#0" className="text-xs font-medium text-blue-500 hover:text-blue-600 px-3 py-1.5 border border-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                                        Connect
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events Section */}
                <div className="_layout_left_sidebar_inner">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 _feed_inner_area">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 _title5">
                                Events
                            </h4>
                            <a href="event.html" className="text-sm text-blue-500 hover:underline">
                                See all
                            </a>
                        </div>
                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <a href={event.href}>
                                        <img src={event.image} alt={event.title} className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <div className="flex gap-3 mb-3">
                                                <div className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-lg px-3 py-2 min-w-[50px]">
                                                    <p className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-none">
                                                        {event.date}
                                                    </p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                                        {event.month}
                                                    </p>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-tight">
                                                        {event.title}
                                                    </h4>
                                                </div>
                                            </div>
                                            <hr className="border-gray-200 dark:border-gray-700 my-3" />
                                            <div className="flex items-center justify-between">
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {event.going} People Going
                                                </p>
                                                <a href="#0" className="text-xs font-medium text-blue-500 hover:text-blue-600">
                                                    Going
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}