using System.ComponentModel;
using System.Windows.Input;

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