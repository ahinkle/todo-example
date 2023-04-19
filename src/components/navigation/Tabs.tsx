import { Children, useState, isValidElement, ReactNode } from 'react';

interface TabProps {
    [x: string]: ReactNode;
    children: React.ReactNode
}

const Tabs = ({ children }: TabProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
      <div className='w-full'>
        <div className="bg-white rounded-lg px-4 pt-4 border">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {Children.map(children, (child: any, index: number) => {
                    if (isValidElement<TabProps>(child)) {
                        return (
                            <a
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className={classNames(
                                    index === activeTab
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium cursor-pointer'
                                )}
                                aria-current={index === activeTab ? 'page' : undefined}
                            >
                                {child.props.label}
                            </a>
                        );
                    }
                })}
            </nav>
        </div>

        {/* Display the content of the active tab */}
        <div className="mt-4">
            {Children.toArray(children)[activeTab]}
        </div>
      </div>
    );
};

export default Tabs;
