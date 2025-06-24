import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Database, Code, BarChart3, GraduationCap, Award, ExternalLink, User, Briefcase, Download, TrendingUp, Users, Globe, ChevronRight, Star, Calendar, MapPin } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = {
    programming: { 
      items: ['Java', 'Python (Basics)', 'SQL'], 
      color: 'blue',
      percentage: [85, 70, 90]
    },
    tools: { 
      items: ['Excel', 'Power BI', 'Power Query'], 
      color: 'green',
      percentage: [95, 80, 75]
    },
    web: { 
      items: ['HTML', 'CSS', 'Bootstrap'], 
      color: 'purple',
      percentage: [90, 85, 80]
    },
    databases: { 
      items: ['PostgreSQL', 'MS SQL Server'], 
      color: 'orange',
      percentage: [75, 70]
    }
  };

  const projects = [
    {
      title: 'Sales Data Analysis',
      tools: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
      description: 'Analyzed sales data to identify trends, top-selling products, and generate business insights with interactive dashboards.',
      icon: <BarChart3 className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { revenue: '+25%', insights: '15+', accuracy: '94%' }
    },
    {
      title: 'HR Analytics Dashboard',
      tools: ['Power BI', 'Excel', 'Power Query'],
      description: 'Visualized HR metrics like attrition rate, hiring trends, and department KPIs with real-time monitoring.',
      icon: <Users className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { efficiency: '+40%', metrics: '20+', satisfaction: '92%' }
    },
    {
      title: 'Greenwood High School Website',
      tools: ['HTML', 'CSS', 'Bootstrap'],
      description: 'Created a responsive website with pages for Home, About, Admissions, and interactive features.',
      icon: <Globe className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { pages: '8+', responsive: '100%', speed: '95%' }
    }
  ];

  const certifications = [
    { name: 'Programming in Java – NPTEL', date: '2024', level: 'Advanced' },
    { name: 'Data Analyst Bootcamp – Udemy', date: '2024', level: 'Professional' },
    { name: 'UI/UX Design – Google', date: '2023', level: 'Certified' }
  ];

  const dataPoints = [
    { label: 'Projects Completed', value: 15, color: 'bg-blue-500' },
    { label: 'Data Sets Analyzed', value: 50, color: 'bg-green-500' },
    { label: 'Visualizations Created', value: 30, color: 'bg-purple-500' },
    { label: 'SQL Queries Written', value: 200, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chandrashekar M
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative mb-8">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl animate-pulse">
                  <User className="w-20 h-20 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Chandrashekar M
                </span>
              </h1>
              
              <div className="mb-6">
                <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-2 animate-slide-up">
                  Data Analyst Fresher
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Karnataka, India</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
                  <span className="text-green-600 font-medium">Available for Hire</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-delay">
                Passionate Computer Science graduate with expertise in transforming raw data into 
                <span className="text-blue-600 font-semibold"> actionable insights</span>. 
                Specialized in SQL, Python, and Power BI with a track record of delivering 
                <span className="text-purple-600 font-semibold"> data-driven solutions</span>.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
                {dataPoints.map((point, index) => (
                  <div key={index} className={`transform transition-all duration-500 delay-${index * 100} ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`w-12 h-12 ${point.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{point.value}+</div>
                      <div className="text-sm text-gray-600">{point.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                Get In Touch
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="group border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Briefcase className="w-5 h-5 group-hover:animate-bounce" />
                View Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Turning data into stories, insights into action</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a passionate Computer Science graduate with a strong foundation in 
                  <span className="text-blue-600 font-semibold"> data analysis and visualization</span>. 
                  My journey in tech has equipped me with proficiency in SQL, Excel, Python, and Power BI, 
                  allowing me to transform raw data into actionable insights.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through various projects including sales analysis dashboards and HR data insights, 
                  I've developed expertise in data cleaning, statistical analysis, and creating compelling visualizations. 
                  I'm excited to bring my <span className="text-purple-600 font-semibold">analytical mindset</span> and 
                  technical skills to a Data Analyst role.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Database className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Data Analysis</h3>
                  <p className="text-gray-600 text-sm">SQL, Python, Excel</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <BarChart3 className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Visualization</h3>
                  <p className="text-gray-600 text-sm">Power BI, Matplotlib</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Code className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Development</h3>
                  <p className="text-gray-600 text-sm">HTML, CSS, Bootstrap</p>
                </div>
              </div>
            </div>
            
            {/* Data Visualization Chart */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Skills Proficiency</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, data], index) => (
                  <div key={category} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700 capitalize">{category}</span>
                      <span className="text-sm text-gray-500">{Math.round(data.percentage.reduce((a, b) => a + b) / data.percentage.length)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r from-${data.color}-400 to-${data.color}-600 transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${Math.round(data.percentage.reduce((a, b) => a + b) / data.percentage.length)}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Building a strong foundation in technology and analytics</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start gap-8 group">
                  <div className="relative z-10 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          B.E. in Computer Science and Engineering
                        </h3>
                        <p className="text-blue-600 font-semibold text-lg mb-2">Alva's Institute of Engineering and Technology</p>
                        <div className="flex items-center gap-4 text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold">CGPA: 7.9</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>2021 – 2025</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Current
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Specialized in data structures, algorithms, database management, and software engineering. 
                      Completed projects in data analysis, web development, and machine learning.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-8 group">
                  <div className="relative z-10 bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">PCMB</h3>
                        <p className="text-green-600 font-semibold text-lg mb-2">Vidhyadri PU College</p>
                        <div className="flex items-center gap-4 text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold">Percentage: 83.23%</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>2019 – 2021</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Completed
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Strong foundation in Physics, Chemistry, Mathematics, and Biology. 
                      Developed analytical thinking and problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Arsenal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Mastering the tools that turn data into insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <div 
                key={category}
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  activeSkill === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${
                    data.color === 'blue' ? '#EBF8FF, #DBEAFE' :
                    data.color === 'green' ? '#F0FDF4, #DCFCE7' :
                    data.color === 'purple' ? '#FAF5FF, #F3E8FF' :
                    '#FFF7ED, #FED7AA'
                  })`
                }}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center ${
                    data.color === 'blue' ? 'bg-blue-500' :
                    data.color === 'green' ? 'bg-green-500' :
                    data.color === 'purple' ? 'bg-purple-500' :
                    'bg-orange-500'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {category === 'programming' && <Code className="w-8 h-8 text-white" />}
                    {category === 'tools' && <BarChart3 className="w-8 h-8 text-white" />}
                    {category === 'web' && <Globe className="w-8 h-8 text-white" />}
                    {category === 'databases' && <Database className="w-8 h-8 text-white" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">{category}</h3>
                  
                  <div className="space-y-3">
                    {data.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">{skill}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-1000 ${
                                data.color === 'blue' ? 'bg-blue-500' :
                                data.color === 'green' ? 'bg-green-500' :
                                data.color === 'purple' ? 'bg-purple-500' :
                                'bg-orange-500'
                              }`}
                              style={{ 
                                width: `${data.percentage[skillIndex]}%`,
                                animationDelay: `${skillIndex * 200}ms`
                              }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-8">{data.percentage[skillIndex]}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Animated background element */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 ${
                  data.color === 'blue' ? 'bg-blue-500' :
                  data.color === 'green' ? 'bg-green-500' :
                  data.color === 'purple' ? 'bg-purple-500' :
                  'bg-orange-500'
                } group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certifications & Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Continuous learning and professional development</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {cert.level}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h3>
                  
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Transforming ideas into impactful solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    {project.icon}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tools */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex} 
                          className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* View Project Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to turn data into insights? Let's discuss how I can contribute to your team's success.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a 
                href="tel:+919945830799" 
                className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300 text-sm">+91-9945830799</p>
                </div>
              </a>
              
              <a 
                href="mailto:chandrashekarchandu531@gmail.com" 
                className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 text-sm break-all">chandrashekarchandu531@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-300 text-sm">Connect with me</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-300 text-sm">View my code</p>
                </div>
              </a>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  I'm available for full-time Data Analyst positions and excited to contribute to your team.
                </p>
                <a 
                  href="mailto:chandrashekarchandu531@gmail.com" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Chandrashekar M
            </div>
            <p className="text-gray-400 mb-6">
              Transforming data into actionable insights • Available for hire
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="tel:+919945830799" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:chandrashekarchandu531@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Chandrashekar M. Crafted with passion for data-driven excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;