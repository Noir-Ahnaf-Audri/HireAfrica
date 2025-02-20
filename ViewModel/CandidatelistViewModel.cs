using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Windows.Input;
using Microsoft.Maui.Controls;

namespace HireAfrica.ViewModels
{
    public class CandidatelistViewModel : INotifyPropertyChanged
    {
        public ObservableCollection<Candidate> Candidates { get; set; }

        public CandidatelistViewModel()
        {
            // Initialize candidates list
            Candidates = new ObservableCollection<Candidate>
            {
                new Candidate
                {
                    Name = "Ayan Sharma",
                    Role = "UI Developer",
                    MutualConnections = 3,
                    ShowAddButton = false
                },
                new Candidate
                {
                    Name = "Shruti Shinda",
                    Role = "Data Analyst",
                    MutualConnections = 7,
                    ShowAddButton = false
                },
                new Candidate
                {
                    Name = "Mr Musk",
                    Role = "Video Editor",
                    MutualConnections = 4,
                    ShowAddButton = true
                },
                new Candidate
                {
                    Name = "Sk Mojahid",
                    Role = "UI/UX Designer",
                    MutualConnections = 2,
                    ShowAddButton = false
                },
                new Candidate
                {
                    Name = "Ani Sharma",
                    Role = "Marketing",
                    MutualConnections = 3,
                    ShowAddButton = true
                },
                new Candidate
                {
                    Name = "Willyam Fox",
                    Role = "Content Creator",
                    MutualConnections = 1,
                    ShowAddButton = false
                }
            };
        }

        public event PropertyChangedEventHandler PropertyChanged;
        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }

    public class Candidate : INotifyPropertyChanged
    {
        public string Name { get; set; }
        public string Role { get; set; }
        public int MutualConnections { get; set; }
        public bool ShowAddButton { get; set; }

        public ICommand AddCommand { get; }

        public Candidate()
        {
            AddCommand = new Command(OnAddClicked);
        }

        private void OnAddClicked()
        {
            // Handle the "Add" button click
            Console.WriteLine($"{Name} added!");
        }

        public event PropertyChangedEventHandler PropertyChanged;
        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}