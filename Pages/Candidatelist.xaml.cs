using HireAfrica.ViewModels;
using Microsoft.Maui.Controls;

namespace HireAfrica.Pages
{
    public partial class Candidatelist : ContentPage
    {
        public Candidatelist()
        {
            InitializeComponent();

            // Set the BindingContext to an instance of CandidatesViewModel
            BindingContext = new CandidatelistViewModel();
        }
    }
}