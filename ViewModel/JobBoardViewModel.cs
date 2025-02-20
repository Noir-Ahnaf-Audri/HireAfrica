using System.Collections.ObjectModel;
using System.ComponentModel;

namespace HireAfrica.ViewModels
{
    public class JobBoardViewModel : INotifyPropertyChanged
    {
        private string _userName;
        public string UserName
        {
            get => _userName;
            set
            {
                _userName = value;
                OnPropertyChanged(nameof(UserName));
            }
        }

        public ObservableCollection<string> Categories { get; set; }
        public ObservableCollection<Job> Jobs { get; set; }

        public JobBoardViewModel()
        {
            // Initialize user name (this could come from a login service or database)
            UserName = "John Doe"; // Replace with dynamic data

            // Initialize categories
            Categories = new ObservableCollection<string>
            {
                "All",
                "Marketing",
                "Design",
                "Administration"
            };

            // Initialize jobs
            Jobs = new ObservableCollection<Job>
            {
                new Job
                {
                    Title = "Accountant",
                    Salary = "$205/Month",
                    Company = "Google Austria",
                    Location = "Remote For EU Only",
                    JobType = "Full Time",
                    Status = "URGENT",
                    PostedTime = "30 min ago | 58 Applications"
                },
                new Job
                {
                    Title = "Marketing",
                    Salary = "$240/Month",
                    Company = "Shopify California",
                    Location = "Remote For EU Only",
                    JobType = "Full Time",
                    Status = "Shortlisted",
                    PostedTime = "30 min ago | 58 Applications"
                }
            };
        }

        public event PropertyChangedEventHandler PropertyChanged;
        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }

    public class Job
    {
        public string Title { get; set; }
        public string Salary { get; set; }
        public string Company { get; set; }
        public string Location { get; set; }
        public string JobType { get; set; }
        public string Status { get; set; }
        public string PostedTime { get; set; }
    }
}